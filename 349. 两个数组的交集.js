/**
 * filter+set
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  return [
    ...new Set(
      nums1.filter((item) => {
        return nums2.indexOf(item) >= 0;
      })
    ),
  ];
};
