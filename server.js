import express from "express";
import multer from "multer";
import path from "path";
import cors from "cors";


const app = express();
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dest = path.join("public", "uploaded");
    cb(null, dest); // set the destination folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    ); // set the file name
  },
});

const upload = multer({ storage: storage });

// define a POST route to handle the file upload
app.post("/api/upload", upload.single("file"), (req, res) => {
  const response = {
    message: "File uploaded successfully.",
    filename: req.file.filename,
  };
  res.status(200).json(response);
});


// start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
