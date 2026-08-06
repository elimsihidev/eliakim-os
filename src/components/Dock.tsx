import {
  House,
  User,
  Briefcase,
  FolderGit2,
  Mail,
} from "lucide-react";

interface DockProps {
  page: number;
  setPage: (page: number) => void;
}

const icons = [
  House,
  User,
  FolderGit2,
  Briefcase,
  Mail,
];

export default function Dock({ page, setPage }: DockProps) {
  return (
    <div className="absolute bottom-6 left-1/2 z-50 -translate-x-1/2">

      <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-2xl shadow-2xl">

        {icons.map((Icon, index) => (

          <button
            key={index}
            onClick={() => setPage(index)}
            className={`rounded-2xl p-3 transition-all duration-300

            ${
              page === index
                ? "scale-110 bg-white/20"
                : "hover:scale-110 hover:bg-white/10"
            }`}
          >

            <Icon size={26} className="text-white" />

          </button>

        ))}

      </div>

    </div>
  );
}