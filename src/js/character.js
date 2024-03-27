export default function sortByHealth(characters) {
  characters.sort((a, b) => b.health - a.health);

  return characters;
}
