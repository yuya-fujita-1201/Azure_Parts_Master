class SearchComponent {
    constructor() {
        this.itemCode = document.getElementById('itemCode');
        this.summaryCode = document.getElementById('summaryCode');
        this.keyword = document.getElementById('keyword');
        this.equipmentCategory = document.getElementById('equipmentCategory');
        this.equipmentCategoryCode = document.getElementById('equipmentCategoryCode');
        this.destination = document.getElementById('destination');
        this.salesStartDate = document.getElementById('salesStartDate');
        this.lastShipmentDate = document.getElementById('lastShipmentDate');
        this.EOSLForecastDate = document.getElementById('EOSLForecastDate');
        this.EOSLDate = document.getElementById('EOSLDate');
        this.serviceStatus = document.getElementById('serviceStatus');
        this.repairEndDate = document.getElementById('repairEndDate');

        const searchBtn = document.getElementById('searchBtn');
        searchBtn.addEventListener('click', () => this.sendSearchRequest());
    }

    sendSearchRequest() {
        const searchParams = {
            itemCode: this.itemCode.value,
            summaryCode: this.summaryCode.value,
            keyword: this.keyword.value,
            equipmentCategory: this.equipmentCategory.value,
            equipmentCategoryCode: this.equipmentCategoryCode.value,
            destination: this.destination.value,
            salesStartDate: this.salesStartDate.value,
            lastShipmentDate: this.lastShipmentDate.value,
            EOSLForecastDate: this.EOSLForecastDate.value,
            EOSLDate: this.EOSLDate.value,
            serviceStatus: this.serviceStatus.value,
            repairEndDate: this.repairEndDate.value,
        };

        // 以下の部分はデータを送信するためのコードを書くこと
        // このデモでは実際にデータを送信する部分は省略します
        console.log('Sending search request with params:', searchParams);
    }
}

// クラスのインスタンスを作成し、検索コンポーネントを起動します
new SearchComponent();
