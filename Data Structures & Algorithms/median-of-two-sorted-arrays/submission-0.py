class Solution:
    def findMedianSortedArrays(
        self,
        nums1: List[int],
        nums2: List[int]
    ) -> float:

        # Binary search the smaller array
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1

        m = len(nums1)
        n = len(nums2)

        left = 0
        right = m

        half = (m + n + 1) // 2

        while left <= right:
            i = (left + right) // 2
            j = half - i

            # Elements immediately around the partitions
            left1 = nums1[i - 1] if i > 0 else float("-inf")
            right1 = nums1[i] if i < m else float("inf")

            left2 = nums2[j - 1] if j > 0 else float("-inf")
            right2 = nums2[j] if j < n else float("inf")

            # Correct partition
            if left1 <= right2 and left2 <= right1:

                if (m + n) % 2:
                    return float(max(left1, left2))

                return (
                    max(left1, left2) +
                    min(right1, right2)
                ) / 2

            # nums1 partition is too far right
            elif left1 > right2:
                right = i - 1

            # nums1 partition is too far left
            else:
                left = i + 1