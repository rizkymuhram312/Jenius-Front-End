import React from "react";

export default function Header() {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-blue-200 p-6">
        <div class="flex items-center flex-no-shrink text-white mr-6">
          <img
            class="h-10"
            alt="Berkas:Jenius-logo.png"
            src="//upload.wikimedia.org/wikipedia/id/thumb/8/89/Jenius-logo.png/800px-Jenius-logo.png"
            decoding="async"
          />
        </div>
      </nav>
    </div>
  );
}
