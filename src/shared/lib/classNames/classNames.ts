type Mods = Record<string, string | boolean>;

export function classNames(cls: string, mods: Mods = {}, additional: Array<string | undefined> = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_className, value]) => !value)
      .map(([className]) => className),
  ].join(' ');
}
