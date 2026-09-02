import {
  FileCheck,
  Search,
  ShieldCheck,
  RefreshCcw,
  Users,
  Database
} from "lucide-react";

const features = [
  {
    icon: FileCheck,
    title: "Enhanced Document Approval",
    desc: "Increase communication, transparency, and accountability amongst all stakeholders in a controlled document approval process.",
  },
  {
    icon: Search,
    title: "Improved Design Review",
    desc: "Identify and prioritize critical design problems before delays and overrun costs occur with collaboration tools such as markups and issues.",
  },
  {
    icon: ShieldCheck,
    title: "Secure File Sharing",
    desc: "Ensure the right people can access the needed project data with comprehensive permission tools at all levels of the project.",
  },
  {
    icon: RefreshCcw,
    title: "Seamless collaboration with powerful, simple software",
    desc: "Securely organize, review, and share project files on a single, connected data environment. Get the right information into the right hands with ease.",
  },
  {
    icon: Users,
    title: "Work flexibly on a cloud-based platform",
    desc: "From design to construction, take the stress out of data management. Empower your teams to access centralized information anytime, anywhere.",
  },
  {
    icon: Database,
    title: "Improved visibility between the office and field",
    desc: "Avoid rework by communicating design and engineering problems, accelerating the delivery of quality construction projects.",
  },
];

export default function Features() {
  return (
    <div className="max-w-3xl mx-auto space-y-2 px-6">
      {features.map((item, index) => {
        const Icon = item.icon;

        return (
          <div key={index} className="flex gap-4 items-start">

            {/* Icon */}
            <div className="text-blue-600">
              <Icon size={40} strokeWidth={1.5} />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>

          </div>
        );
      })}
    </div>
  );
}