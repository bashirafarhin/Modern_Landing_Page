import { CheckCircle, Circle, XCircle } from "lucide-react";

interface PasswordRulesProps {
  value: string;
  zodError?: string;
}

const rules = [
  {
    label: "At least 6 characters",
    test: (val: string) => val.length >= 6,
  },
  {
    label: "At least one uppercase letter",
    test: (val: string) => /[A-Z]/.test(val),
  },
  {
    label: "At least one lowercase letter",
    test: (val: string) => /[a-z]/.test(val),
  },
  {
    label: "At least one number",
    test: (val: string) => /[0-9]/.test(val),
  },
  {
    label: "At least one special character",
    test: (val: string) => /[!@#$%^&*(),.?":{}|<>]/.test(val),
  },
];

const PasswordRules = ({ value, zodError }: PasswordRulesProps) => {
  return (
    <div className="text-sm">
      {rules.map((rule, index) => {
        const passed = rule.test(value);
        const hasError = zodError && !passed;
        const color = hasError
          ? "text-red-500"
          : passed
          ? "text-green-500"
          : "text-gray-500";

        const Icon = hasError ? XCircle : passed ? CheckCircle : Circle;

        return (
          <div key={index} className={`flex items-center gap-2 ${color}`}>
            <Icon size={16} />
            <span>{rule.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default PasswordRules;
