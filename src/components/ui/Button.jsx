export default function Button({ children, variant='outline', className='', ...props }) {
  const base = "inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm transition";
  const styles = {
    outline: "border border-neutral-300 hover:bg-neutral-50",
    solid: "bg-neutral-900 text-white hover:brightness-95",
  };
  return <button className={`${base} ${styles[variant]} ${className}`} {...props}>{children}</button>;
}