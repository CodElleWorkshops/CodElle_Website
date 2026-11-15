// Everyone who helped build this website gets their own file in data/contributors/.
// One file per person means nobody's pull request clashes with anyone else's.

export interface Contributor {
  name: string;
  program: string;
  linkedin?: string;
}

// Vite finds every file in the contributors folder and gives us what each one exports.
const files = import.meta.glob<Contributor>("./contributors/*.ts", { eager: true, import: "default" });

// A file that forgot `export default me;` gives undefined, so we skip it instead of crashing.
export const contributors: Contributor[] = Object.values(files)
  .filter((person): person is Contributor => Boolean(person))
  .sort((a, b) => a.name.localeCompare(b.name));
