//El mismo ejercicio pero añadiendo una dependencia 'picocolors'

const pc = require("picocolors");
const fs = require("node:fs/promises");
const path = require("node:path");

const showHidden = process.argv.includes("--hidden");

const folder =
  process.argv[2] && process.argv[2] !== "--hidden" ? process.argv[2] : ".";

async function ls(folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch (error) {
    console.error(pc.red(`No se pudo leer el directorio -> ${folder}`));
    process.exit(1);
  }

  if (showHidden) {
    files = files.filter((file) => file.startsWith("."));
  } else {
    files = files.filter((file) => !file.startsWith("."));
  }

  const filePromises = files.map(async (file) => {
    const filePath = path.join(folder, file);
    let stats;
    try {
      stats = await fs.stat(filePath);
    } catch (error) {
      console.error(`No se pudo leer el archivo -> ${filePath}`);
      process.exit(1);
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? "d" : "f";
    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleString();

    return `${fileType.padEnd("1")} ${pc.green(file.padEnd("35"))} ${pc.yellow(
      fileSize.toString().padStart("4").padEnd("4")
    )} ${pc.gray(fileModified)}`;
  });

  const filesInfo = await Promise.all(filePromises);

  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}
ls(folder);
