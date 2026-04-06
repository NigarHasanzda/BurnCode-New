interface FeatureCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

const ChooseCard = ({ title, description, children, className = "" }: FeatureCardProps) => (
  <div className={`bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm flex flex-col h-full hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500 ${className}`}>
    <div className="bg-[#F8FAFC] rounded-3xl h-48 mb-8 flex items-center justify-center p-6 overflow-hidden">
      {children}
    </div>
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-[#1D165C] tracking-tight">{title}</h3>
      <p className="text-slate-500 leading-relaxed text-sm font-medium">{description}</p>
    </div>
  </div>
);