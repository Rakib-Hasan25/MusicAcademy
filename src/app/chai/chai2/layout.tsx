export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <>
      <h2>Navitem2</h2>
        {children}
     </>
     
      
    );
  }