class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        islands_count: int = 0
        checked_island_cells: set[int] = set()

        def is_island_cell(i: int, k: int) -> bool:
            return grid[i][k] == "1"

        def is_island_cell_checked(i: int, k: int) -> bool:
            return (i, k) in checked_island_cells

        def check_island_cell(i: int, k: int):
            if not is_island_cell(i, k) or is_island_cell_checked(i, k):
                return

            checked_island_cells.add((i, k))

            is_top_allowed: bool = i > 0
            is_bottom_allowed: bool = i < len(grid) - 1
            is_left_allowed: bool = k > 0
            is_right_allowed: bool = k < len(grid[i]) - 1

            if is_top_allowed and is_island_cell(i - 1, k):
                check_island_cell(i - 1, k)
            
            if is_bottom_allowed and is_island_cell(i + 1, k):
                check_island_cell(i + 1, k)
            
            if is_left_allowed and is_island_cell(i, k - 1):
                check_island_cell(i, k - 1)

            if is_right_allowed and is_island_cell(i, k + 1):
                check_island_cell(i, k + 1)

        for i in range(len(grid)):
            for k in range(len(grid[i])):
                if is_island_cell(i, k) and not is_island_cell_checked(i, k):
                    islands_count += 1
                    check_island_cell(i, k)
        
        return islands_count
                
                
