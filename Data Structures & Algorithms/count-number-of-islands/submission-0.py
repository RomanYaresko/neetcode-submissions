class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        islands_count: int = 0
        checked_island_cells: set[int] = set()

        def check_island_cell(i: int, k: int):
            if grid[i][k] != "1" or (i, k) in checked_island_cells:
                return

            checked_island_cells.add((i, k))

            is_top_allowed: bool = i > 0
            is_bottom_allowed: bool = i < len(grid) - 1
            is_left_allowed: bool = k > 0
            is_right_allowed: bool = k < len(grid[i]) - 1

            if is_top_allowed and grid[i - 1][k] == "1":
                check_island_cell(i - 1, k)
            
            if is_bottom_allowed and grid[i + 1][k] == "1":
                check_island_cell(i + 1, k)
            
            if is_left_allowed and grid[i][k - 1] == "1":
                check_island_cell(i, k - 1)

            if is_right_allowed and grid[i][k + 1] == "1":
                check_island_cell(i, k + 1)

        for i in range(len(grid)):
            for k in range(len(grid[i])):
                if grid[i][k] == "1" and (i, k) not in checked_island_cells:
                    islands_count += 1
                    check_island_cell(i, k)
        
        return islands_count
                
                
