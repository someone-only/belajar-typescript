interface netId {
        netId: string
}

interface hostId {
        hostId: string
}

type IpAddress = netId & hostId

const ip: IpAddress = {
        netId: "192.168.9",
        hostId: "111"
}
