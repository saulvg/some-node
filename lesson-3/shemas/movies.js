const z = require("zod");

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: "Movie title must be a string",
    required_error: "Movie title is required",
  }),
  year: z.number().int().positive().min(1900).max(2024),
  director: z.string(),
  duration: z.number().int().positive(),
  poster: z
    .string()
    .url({ message: "Poster must be a valid URL" })
    .endsWith(".jpg"),
  //genre:z.array(z.string()),
  //genre: z.enum(["Action","Adventure","Comedy","Drama","Fantasy","Horror","Thriller","True","Crime","Sci-Fi",]).array(),
  genre: z.array(
    z.enum([
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Horror",
      "Thriller",
      "True",
      "Crime",
      "Sci-Fi",
    ]),
    {
      invalid_type_error: "Movie genre must be a string",
      required_error: "Movie genre must be an array of enum Genre",
    }
  ),
  rate: z.number().min(0).max(10).default(5),
});

//parse devulve una excepcion si falla, y deberia ser controlado con un try catch
/* function validateMovie(object) {
    return movieSchema.parse(object);
  } */

//safeParse devuelve un objeto indicando si la validacion fue exitosa o no
function validateMovie(object) {
  return movieSchema.safeParse(object);
}

function validatePartialMovie(input) {
  return movieSchema.partial().safeParse(input);
}

module.exports = {
  validateMovie,
  validatePartialMovie,
};
