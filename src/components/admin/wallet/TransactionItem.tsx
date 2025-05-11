
import { ArrowDownLeft, ArrowUpRight, LucideIcon } from "lucide-react";

interface TransactionItemProps {
  type: "credit" | "debit";
  title: string;
  date: string;
  amount: string;
}

const TransactionItem = ({ type, title, date, amount }: TransactionItemProps) => {
  const isCredit = type === "credit";
  const Icon = isCredit ? ArrowDownLeft : ArrowUpRight;
  const bgColor = isCredit ? "bg-green-100" : "bg-red-100";
  const textColor = isCredit ? "text-green-600" : "text-red-600";
  const amountPrefix = isCredit ? "+€ " : "-€ ";

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full ${bgColor} flex items-center justify-center`}>
          <Icon size={18} className={textColor} />
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
      </div>
      <p className={`font-semibold ${textColor}`}>{amountPrefix}{amount}</p>
    </div>
  );
};

export default TransactionItem;
