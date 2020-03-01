export function handleSubmit(form = {}) {
  const { name, rpg, description, thematic } = form;
  if (!name.length) return { error: 'Insira seu nome!' };
  if (!rpg.length) return { error: 'Insira o nome do RPG!' };
  if (rpg.length < 4 || rpg.length > 18)
    return { error: 'O nome do RPG não cumpre os requisitos!' };
  if (!thematic.length) return { error: 'Insira a temática do RPG!' };
  if (!description.length) return { error: 'Insira a descrição do RPG!' };
  if (description.length < 12 || description.length > 32)
    return { error: 'A descrição do RPG não cumpre os requisitos!' };

  return {};
}
