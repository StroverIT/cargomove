import mime from "mime";
import { join } from "path";
import * as dateFn from "date-fns";
import formidable from "formidable";
import { mkdir, stat } from "fs/promises";

// export const FormidableError = formidable.errors.FormidableError;

export const parseForm = async (req, pathFile) => {
  return await new Promise(async (resolve, reject) => {
    const uploadDir = join(
      process.env.ROOT_DIR || process.cwd(),
      `/public/uploads/${pathFile}`
    );

    try {
      await stat(uploadDir);
    } catch (e) {
      if (e.code === "ENOENT") {
        await mkdir(uploadDir, { recursive: true });
      } else {
        console.error(e);
        reject(e);
        return;
      }
    }

    const form = formidable({
      multiples: true,
      uploadDir,
      filename: (_name, _ext, part) => {
        let filename = ""; //  To avoid duplicate upload

        const uniqueSuffix = () => {
          return `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        };

        if (filename !== "") {
          return filename;
        }

        filename = `${part.name || "unknown"}-${uniqueSuffix()}.${
          mime.getExtension(part.mimetype || "") || "unknown"
        }`;

        return filename;
      },
      filter: (part) => {
        if (!part) return;
        return (
          (part.name === "media" ||
            part.name === "article" ||
            part.name === "item") &&
          (part.mimetype?.includes("image") || false)
        );
      },
    });

    form.parse(req, function (err, fields, files) {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
};
