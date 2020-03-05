const binarySearch = searchItem => {
  const searchList = [7, 8, 2, 5, 6, 9, 0, 10];
  // const { input: searchItem } = props.formInput;
  const sortedSearchList = searchList.sort((a, b) => a - b);
  console.log(sortedSearchList);
  let low = 0;
  let high = searchList.length - 1;

  while (low <= high) {
    // console.log("came in while");
    const mid = Math.floor((low + high) / 2);
    const guess = sortedSearchList[mid];

    if (searchItem == guess) {
      return mid;
    }
    if (searchItem < guess) high = mid - 1;
    else low = mid + 1;
    // console.log(mid);
  }
  return null;
};

export default binarySearch;
