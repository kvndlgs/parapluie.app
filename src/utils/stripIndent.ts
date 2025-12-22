function stripIndent(input: string) {
      const lines = input.replace(/\t/g, '  ').split('\n');

        // remove leading/trailing empty lines
          while (lines.length && lines[0].trim() === '') lines.shift();
            while (lines.length && lines[lines.length - 1].trim() === '') lines.pop();

              const indents = lines
                  .filter(l => l.trim().length)
                      .map(l => (l.match(/^ */)?.[0].length ?? 0));

                        const minIndent = indents.length ? Math.min(...indents) : 0;

                          return lines.map(l => l.slice(minIndent)).join('\n').trim();
                          }
                          
export default stripIndent;