import multer from "multer";

// Function to generate a unique suffix
const generateUniqueSuffix = () => {
  return Date.now() + '-' + Math.round(Math.random() * 1E9);
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = generateUniqueSuffix();
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

export const upload = multer({ storage });
