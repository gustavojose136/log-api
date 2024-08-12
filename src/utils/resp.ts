const resp = (s: number, m: unknown) => {
  return {
    status: s,
    message: m,
  };
};

const respM = (s: number, m: unknown) => {
  return {
    status: s,
    message: { message: m },
  };
};

export { resp, respM };
