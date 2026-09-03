import Image from "next/image";
import type { Band } from "@/app/types/band";

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article className="band-card">
      <Image
        src={band.image}
        alt={band.name}
        width={400}
        height={250}
      />

      <h2>{band.name}</h2>

      <p>แนวเพลง: {band.genre}</p>

      <p>{band.description}</p>

      <h3>สมาชิกวง</h3>

      <ul>
        {band.members.map((member) => (
          <li key={member.name} className="member">
            <Image
              src={member.image}
              alt={member.name}
              width={50}
              height={50}
            />

            <span>
              {member.name}
              <small>{member.role}</small>
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}