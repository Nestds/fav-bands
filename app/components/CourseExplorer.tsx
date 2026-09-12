"use client";

import { useState, type ChangeEvent } from "react";
import type { Course } from "@/app/types/course";

type CourseExplorerProps = {
  courses: Course[];
};

export default function CourseExplorer({
  courses,
}: CourseExplorerProps) {
  const [keyword, setKeyword] = useState("");

  function handleKeywordChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <input
        type="search"
        aria-label="ค้นหารายวิชา"
        value={keyword}
        onChange={handleKeywordChange}
        placeholder="ค้นหาชื่อวิชาหรือรหัสวิชา"
      />
    </div>
  );
}