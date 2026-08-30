class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        max_area: int = 0
        checked_island_cells: set[tuple[int, int]] = set()

        def is_island_cell(i: int, k: int) -> bool:
            return grid[i][k] == 1

        def is_island_cell_checked(i: int, k: int) -> bool:
            return (i, k) in checked_island_cells

        def check_island_cell(i: int, k: int, area: list[int]):
            if not is_island_cell(i, k) or is_island_cell_checked(i, k):
                return

            area[0] += 1
            checked_island_cells.add((i, k))

            is_top_allowed: bool = i > 0
            is_bottom_allowed: bool = i < len(grid) - 1
            is_left_allowed: bool = k > 0
            is_right_allowed: bool = k < len(grid[i]) - 1

            if is_top_allowed and is_island_cell(i - 1, k):
                check_island_cell(i - 1, k, area)
            
            if is_bottom_allowed and is_island_cell(i + 1, k):
                check_island_cell(i + 1, k, area)
            
            if is_left_allowed and is_island_cell(i, k - 1):
                check_island_cell(i, k - 1, area)

            if is_right_allowed and is_island_cell(i, k + 1):
                check_island_cell(i, k + 1, area)

        for i in range(len(grid)):
            for k in range(len(grid[i])):
                if is_island_cell(i, k) and not is_island_cell_checked(i, k):
                    area: list[int] = [0]
                    check_island_cell(i, k, area)
                    max_area = max(max_area, area[0])
        
        return max_area