enum VIP {
        BRONZE = "BRONZE",
        SILVER = "SILVER",
        GOLD = "GOLD",
        DIAMOND = "DIAMOND",
}

type Costumer = {
        id: number,
        nama: string,
        vipLevel: VIP,
}

const costumer: Costumer = {
        id: 1,
        nama: "cobol",
        vipLevel: VIP.GOLD
}
