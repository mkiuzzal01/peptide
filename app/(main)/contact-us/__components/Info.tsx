import { Mail, Phone, MapPin } from "lucide-react";

const infos = [
  {
    title: "Email",
    value: "support@okazzion.com",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "+1 (555) 123-4567",
    icon: Phone,
  },
  {
    title: "Address",
    value: "123 Main St, Anytown, USA",
    icon: MapPin,
  },
];

export default function Info() {
  return (
    <div>
      <div className="space-y-6">
        {infos.map((info) => {
          const Icon = info.icon;

          return (
            <div
              key={info.title}
              className="bg-white rounded-lg flex items-start gap-4 p-3"
            >
              {/* Icon */}
              <div className="rounded-full p-2">
                <Icon size={18} />
              </div>

              {/* Content */}
              <div>
                <p className="text-sm  tracking-wide text-black">
                  {info.title}
                </p>
                <p className="text-sm font-medium text-gray-500">
                  {info.value}
                </p>
                <p className="text-sm font-medium text-gray-500">
                  {info.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
