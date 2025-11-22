import EditProgramForm from "@/components/programs/EditProgramForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function EditProgram() {
  return (
    <>
      <div className="bg-gray-100 rounded-lg p-6">
        <div className="inline-block">
          <Link
            href={"/programs"}
            className="flex  items-center gap-2 rounded-lg text-sm text-black  hover:bg-gray-300 px-3 py-2  transition-all duration-200 "
          >
            <ArrowLeft
              size={18}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            Back to programs
          </Link>
        </div>

        <EditProgramForm />
      </div>
    </>
  );
}
