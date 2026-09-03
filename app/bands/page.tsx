import BandCard from "@/app/components/BandCard";
import type { Band } from "@/app/types/band";

const bands: Band[] = [
  {
    id: 1,
    name: "MIRRR",
    genre: "Pop / R&B",
    description: "วงดนตรีดูโอจากประเทศไทย",
    image: "/images/bands/mirr.jpg",
    members: [
      {
  name: "นาว",
  role: "ร้องนำ",
  image: "/images/bands/mirrr_01.jpg",
},
{
  name: "โต",
  role: "ร้องนำ / ดนตรี",
  image: "/images/bands/mirrr_02.jpg",
},
    ],
  },

  {
  id: 2,
  name: "Dept",
  genre: "Indie Pop",
  description: "วงดนตรีไทยแนว Indie Pop ที่มีเอกลักษณ์ด้านเสียงเพลงและบรรยากาศของเพลง",
  image: "/images/bands/dept.jpg",
  members: [
    {
  name: "ลุค ทศพล",
  role: "ร้องนำ",
  image: "/images/bands/look.png",
},
{
  name: "เบนซ์ ภวัต",
  role: "กีตาร์",
  image: "/images/bands/benz.png",
},
  ],
},

  {
    id: 3,
    name: "Maroon 5",
    genre: "Pop Rock",
    description: "วงดนตรี Pop Rock จากสหรัฐอเมริกา",
    image: "/images/bands/maroon-5.jpg",

     members: [
  {
    name: "Adam Levine",
    role: "ร้องนำ",
    image: "/images/bands/Maroon-adam.jpg",
  },
  {
    name: "James Valentine",
    role: "กีตาร์",
    image: "/images/bands/Maroon-jame.jpg",
  },
  {
    name: "Jesse Carmichael",
    role: "คีย์บอร์ด",
    image: "/images/bands/Maroon_jesse.jpg",
  },
  {
    name: "Matt Flynn",
    role: "กลอง",
    image: "/images/bands/maroon-Matt.jpg",
  },
],
  },
];

export default function BandsPage() {
  return (
    <main>
      <h1>Favorite Bands</h1>

      <p>วงดนตรีที่ฉันชื่นชอบ</p>

      <section className="band-grid">
        {bands.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </section>
    </main>
  );
}