import { NextResponse } from 'next/server';

export interface HipolabsUniversity {
  name: string;
  domains: string[];
  web_pages: string[];
  country: string;
  alpha_two_code: string;
  'state-province': string | null;
}

export interface EnrichedUniversity extends HipolabsUniversity {
  id: string;
  province: string;
  tuitionRange: string;
  imageUrl: string;
  tags: string[];
  type: 'Public' | 'Private';
  facilities: string;
}

const mockImages = [
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1592285880097-15ba0562e873?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1606761568499-6d2451b08f66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
];

// Helper to determine province based on university name, defaulting to Phnom Penh
function inferProvince(name: string): string {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('svey') || lowerName.includes('svay')) return 'Svay Rieng';
  if (lowerName.includes('angkor')) return 'Siem Reap';
  if (lowerName.includes('battambang')) return 'Battambang';
  if (lowerName.includes('kampong')) return 'Kampong Cham';
  return 'Phnom Penh';
}

function inferType(name: string): 'Public' | 'Private' {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('royal') || lowerName.includes('national') || lowerName.includes('institute of education')) return 'Public';
  return 'Private';
}

function generateTuition(type: 'Public' | 'Private'): string {
  if (type === 'Public') {
    const min = Math.floor(Math.random() * 3 + 3) * 100; // 300 - 500
    const max = min + 300;
    return `$${min} - $${max}/yr`;
  } else {
    const min = Math.floor(Math.random() * 15 + 15) * 100; // 1500 - 3000
    const max = min + 2000;
    return `$${min.toLocaleString()} - $${max.toLocaleString()}/yr`;
  }
}

function generateTags(name: string): string[] {
  const lowerName = name.toLowerCase();
  const tags: string[] = [];
  if (lowerName.includes('technology') || lowerName.includes('poly')) {
    tags.push('Engineering', 'Computer Science');
  } else if (lowerName.includes('health') || lowerName.includes('science')) {
    tags.push('Medicine', 'Biology');
  } else if (lowerName.includes('management') || lowerName.includes('economics')) {
    tags.push('Business', 'Finance');
  } else if (lowerName.includes('arts') || lowerName.includes('fine')) {
    tags.push('Arts', 'Design');
  } else {
    tags.push('Business', 'IT', 'Foreign Languages');
  }
  return tags.slice(0, 3);
}

export async function GET() {
  try {
    const res = await fetch('http://universities.hipolabs.com/search?country=Cambodia', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch from Hipolabs API');
    }

    const rawData: HipolabsUniversity[] = await res.json();

    // Enrich the data
    const enrichedData: EnrichedUniversity[] = rawData.map((uni, index) => {
      const type = inferType(uni.name);
      return {
        ...uni,
        id: `uni-${index}`,
        province: inferProvince(uni.name),
        type,
        tuitionRange: generateTuition(type),
        imageUrl: mockImages[index % mockImages.length],
        tags: generateTags(uni.name),
        facilities: type === 'Public' ? 'Library, Labs, Auditoriums' : 'Tech Hub, Cafeteria, Sports'
      };
    });

    return NextResponse.json(enrichedData);
  } catch (error) {
    console.error('Error fetching universities:', error);
    return NextResponse.json(
      { error: 'Failed to fetch universities' },
      { status: 500 }
    );
  }
}
