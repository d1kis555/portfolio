const validate = (item: HTMLInputElement | HTMLSelectElement | HTMLButtonElement | null, value: string) => {
  if (value === '') {
    item?.classList.add('no-valid');
    return 1;
  }
  return 0;
};

export default validate;
