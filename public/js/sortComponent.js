class SortComponent {
    constructor() {
        this.sortColumn = null;
        this.sortDescending = false;
    }

    sortResults(results, column) {
        if (this.sortColumn === column) {
            this.sortDescending = !this.sortDescending;
        } else {
            this.sortColumn = column;
            this.sortDescending = false;
        }

        return results.sort((a, b) => {
            if (a[column] < b[column]) {
                return this.sortDescending ? 1 : -1;
            } else if (a[column] > b[column]) {
                return this.sortDescending ? -1 : 1;
            } else {
                return 0;
            }
        });
    }
}

// クラスのインスタンスを作成します
const sorter = new SortComponent();
