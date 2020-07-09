function getOptions(partial: string, options: string[]): string[] {
  return options.filter(current => current.startsWith(partial));
}

function allOptions(partial: string, oldPartial: string, options: string[]): string {
  console.log(partial);
  console.log(options)
  const allPartials = getOptions(partial, options);
  if (allPartials.length === options.length) return allOptions(allPartials[0].slice(0, partial.length + 1), partial, allPartials);
  return oldPartial;
}

function matchOptions(partial: string, options: string[]): string | null {
  const allPartials = getOptions(partial, options);
  if (allPartials.length === 1) return allPartials[0];

  if (allPartials.length > 1) return allOptions(allPartials[0].slice(0, partial.length + 1), partial, allPartials);

  return null;
}

export default function Completer(options: string[]) {
  return {
    complete: (partial: string) => matchOptions(partial, options),
    options: (partial: string) => getOptions(partial, options)
  };
}