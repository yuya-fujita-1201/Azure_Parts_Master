class ResultsComponent {
    constructor() {
        this.resultsSection = document.getElementById('results-section');
        this.sortColumn = null;
        this.sortDescending = false;
    }

    displayResults(results) {
        this.resultsSection.innerHTML = '';

        // Headers
        const headerRow = document.createElement('div');
        headerRow.className = 'result-row header-row';
        ['itemCode', 'summaryCode', 'destination', 'approvalStatus', 'itemDivision', 'organization', 'itemStatus', 'comment'].forEach(column => {
            const headerCell = document.createElement('div');
            headerCell.className = 'result-cell';
            headerCell.textContent = column;
            headerCell.addEventListener('click', () => this.sortResults(column));
            headerRow.appendChild(headerCell);
        });
        this.resultsSection.appendChild(headerRow);

        // Data rows
        results.forEach(result => {
            const resultRow = document.createElement('div');
            resultRow.className = 'result-row';
            ['itemCode', 'summaryCode', 'destination', 'approvalStatus', 'itemDivision', 'organization', 'itemStatus', 'comment'].forEach(column => {
                const resultCell = document.createElement('div');
                resultCell.className = 'result-cell';
                resultCell.textContent = result[column];
                resultRow.appendChild(resultCell);
            });
            this.resultsSection.appendChild(resultRow);
        });
    }

    sortResults(column) {
        if (this.sortColumn === column) {
            this.sortDescending = !this.sortDescending;
        } else {
            this.sortColumn = column;
            this.sortDescending = false;
        }

        // この部分では、指定された列とソート方向に基づいて結果をソートする処理を書く
        // このデモでは、ソートをトリガーする部分のみを実装しています
        console.log('Sorting results by column:', column, 'Descending:', this.sortDescending);
    }
}

// クラスのインスタンスを作成します
new ResultsComponent();
