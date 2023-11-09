import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=" w-[100vw] min-h-screen px-5"
        style={{ backgroundColor: "#F4D839", overflowX: "hidden" }}
      >
        <div className=" px-20 w-full ">{children}</div>
      </body>
    </html>
  );
}
