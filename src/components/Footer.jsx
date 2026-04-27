function Footer({ name, title }) {
  return (
    <footer className="border-t border-card-border bg-surface-strong">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-muted sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <p>
          {name} • {title}
        </p>
        <p>Crafted with React, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  );
}

export default Footer;
