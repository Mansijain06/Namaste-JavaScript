//Filter the resturant on the bases of resturant name

export const filterData = (searchText, resturants) => {
  const filteredData = resturants.filter((resturant) =>
    resturant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
};
