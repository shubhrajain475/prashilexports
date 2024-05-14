// import qr from 'qrcode';

// // Controller function to generate QR code for a given URL
// export const generateQRCode = (req, res) => {
//     const { url } = req.query;
//     if (!url) {
//         return res.status(400).send('https://rankyatra.com ');
//     }

//     qr.toFileStream(res, url, (err) => {
//         if (err) {
//             console.error('Error generating QR code:', err);
//             return res.status(500).send('Error generating QR code');
//         }
//         console.log('QR code generated successfully for:', url);
//     });
// };
import fs from "fs";
import path from "path";
import qr from "qrcode";

// Controller function to generate and save QR code for a given URL
export const generateQRCode = (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).send("Missing URL parameter");
  }

  const outputDir = "H:/ShivaniMamBackend/model"; // Specify the output directory
  const outputFile = "rankyatra.png"; // Specify the output file name

  // Ensure the output directory exists, if not create it
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const qrPath = path.join(outputDir, outputFile);
  const qrStream = fs.createWriteStream(qrPath);

  // Generate the QR code and pipe it to the file stream
  qr.toFileStream(qrStream, url, (err) => {
    if (err) {
      console.error("Error generating QR code:", err);
      return res.status(500).send("Error generating QR code");
    }
    console.log("QR code generated and saved successfully for:", url);
    res.sendFile(qrPath); // Send the saved QR code file as response
  });
};
