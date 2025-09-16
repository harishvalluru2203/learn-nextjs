import MswWorker from "../components/MswWorker";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MswWorker>{children}</MswWorker>
      </body>
    </html>
  );
}
