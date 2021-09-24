export const generate = ({ type, length }) => {
  const alhpa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "@#$%&@#$%&";
  let result = "";

  switch (type) {
    case "uppercase":
      for (let i = 0; i < length; i++) {
        result += alhpa.charAt(Math.floor(Math.random() * 26));
      }
      return result;
    case "lowercase":
      for (let i = 0; i < length; i++) {
        result += alhpa.charAt(Math.floor(Math.random() * 26));
      }
      return result.toLowerCase();
    case "numbers":
      result = Math.floor(Math.random() * length);
      return result;
    case "symbols":
      for (let i = 0; i < length; i++) {
        result += symbols.charAt(Math.floor(Math.random() * 26));
      }
      return result;

    default:
      return "";
  }
};
