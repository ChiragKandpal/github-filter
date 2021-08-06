export const apiHandler = async (userName: string) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${userName}/repos`, {method: "GET",}
    );

    if (response.ok) {
      const responseData = await response.json();
      if (responseData.length > 0) {
        return responseData;
      } else {
        return 0;
      }
    } else {
      throw new Error("user does not exist");
    }
  } catch (err) {
    console.error(err);
    return -1;
  }
};
