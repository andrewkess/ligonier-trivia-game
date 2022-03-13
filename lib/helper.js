//Helper function called cleanQuestion that accepts a question string 
//and uses regex to returns a clean question without special characters 

const cleanQuestion = (question) => {
  return question
  .replace(/&quot;/g, '"')
  .replace(/&#039;/g, `'`)
  .replace(/&ocirc;/g, `ô`)
  .replace(/&Aring;/g, 'Å')
  .replace(/&ldquo;/g, '“')
  .replace(/&rdquo;/g, '”')
};

export default cleanQuestion;