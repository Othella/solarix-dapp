import { adminBadgeAddress, instantiatedComponentAddress } from "@/constants";


export const buyNftManifest = `
    CALL_METHOD
        Address("component_sim1cptxxxxxxxxxfaucetxxxxxxxxx000527798379xxxxxxxxxhkrefh")
        "lock_fee"
        Decimal("5000")
    ;
    CALL_METHOD
        Address("account_sim1c83r6qw6jsqq2dw37l0uhf0ndp87qw27t6x8p53k0h3e2v2ea2mekw")
        "withdraw"
        Address("resource_sim1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxakj8n3")
        Decimal("6000")
    ;
    TAKE_FROM_WORKTOP
        Address("resource_sim1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxakj8n3")
        Decimal("6000")
        Bucket("bucket1")
    ;
    CALL_METHOD
        Address("component_sim1cr4y0gjxcsj5kukswz0w0zqq653mhr8232yahwyc4q29p27sppwk9t")
        "buy_nft"
        0u64
        10u32
        Bucket("bucket1")
    ;
    CALL_METHOD
        Address("account_sim1c83r6qw6jsqq2dw37l0uhf0ndp87qw27t6x8p53k0h3e2v2ea2mekw")
        "try_deposit_batch_or_refund"
        Expression("ENTIRE_WORKTOP")
        Enum<0u8>()
    ;
`

export const claimEarningsManifest = `
    CALL_METHOD
        Address("component_sim1cptxxxxxxxxxfaucetxxxxxxxxx000527798379xxxxxxxxxhkrefh")
        "lock_fee"
        Decimal("5000")
    ;
    CALL_METHOD
        Address("account_sim1c956qr3kxlgypxwst89j9yf24tjc7zxd4up38x37zr6q4jxdx9rhma")
        "create_proof_of_non_fungibles"
        Address("resource_sim1ngy8zxuvjaxnufmqp7jevml7f3v59mk4p4c2f2tqkvu4f9y7vjkw5a")
        Array<NonFungibleLocalId>(
            NonFungibleLocalId("#3#")
        )
    ;

    POP_FROM_AUTH_ZONE
        Proof("claim_badge_proof")
    ;

    CALL_METHOD
        Address("component_sim1cr4y0gjxcsj5kukswz0w0zqq653mhr8232yahwyc4q29p27sppwk9t")
        "claim_earnings"
        0u64
        Proof("claim_badge_proof")
    ;
    CALL_METHOD
        Address("account_sim1c956qr3kxlgypxwst89j9yf24tjc7zxd4up38x37zr6q4jxdx9rhma")
        "try_deposit_batch_or_refund"
        Expression("ENTIRE_WORKTOP")
        Enum<0u8>()
    ;
`

export const claimSalesProceedsManifest = `
    CALL_METHOD
        Address("component_sim1cptxxxxxxxxxfaucetxxxxxxxxx000527798379xxxxxxxxxhkrefh")
        "lock_fee"
        Decimal("5000")
    ;
    CALL_METHOD
        Address("component_sim1cr4y0gjxcsj5kukswz0w0zqq653mhr8232yahwyc4q29p27sppwk9t")
        "claim_sales_proceeds"
        Address("account_sim1c83r6qw6jsqq2dw37l0uhf0ndp87qw27t6x8p53k0h3e2v2ea2mekw")
    ;
    CALL_METHOD
        Address("account_sim1c83r6qw6jsqq2dw37l0uhf0ndp87qw27t6x8p53k0h3e2v2ea2mekw")
        "try_deposit_batch_or_refund"
        Expression("ENTIRE_WORKTOP")
        Enum<0u8>()
    ;
`

export const createManifest = `
    CALL_METHOD
        Address("component_sim1cptxxxxxxxxxfaucetxxxxxxxxx000527798379xxxxxxxxxhkrefh")
        "lock_fee"
        Decimal("5000")
    ;
    CALL_METHOD
        Address("account_sim1c956qr3kxlgypxwst89j9yf24tjc7zxd4up38x37zr6q4jxdx9rhma")
        "create_proof_of_non_fungibles"
        Address("resource_sim1n2lvuzvc60lvdc2dmrszpa20n2tu3vw839x97gtq6ezvx2qu9m9w95")
        Array<NonFungibleLocalId>(
            NonFungibleLocalId("#1#")
        )
    ;
    CALL_METHOD
        Address("component_sim1cr4y0gjxcsj5kukswz0w0zqq653mhr8232yahwyc4q29p27sppwk9t")
        "create_fractionalized_asset"
        Address("account_sim1c83r6qw6jsqq2dw37l0uhf0ndp87qw27t6x8p53k0h3e2v2ea2mekw")
        Decimal("550")
        15u64
    ;
    CALL_METHOD
        Address("account_sim1c956qr3kxlgypxwst89j9yf24tjc7zxd4up38x37zr6q4jxdx9rhma")
        "try_deposit_batch_or_refund"
        Expression("ENTIRE_WORKTOP")
        Enum<0u8>()
    ;
`

export const depositEarningsManifest = `
    CALL_METHOD
        Address("component_sim1cptxxxxxxxxxfaucetxxxxxxxxx000527798379xxxxxxxxxhkrefh")
        "lock_fee"
        Decimal("5000")
    ;
    CALL_METHOD
        Address("account_sim1c956qr3kxlgypxwst89j9yf24tjc7zxd4up38x37zr6q4jxdx9rhma")
        "create_proof_of_non_fungibles"
        Address("resource_sim1n2lvuzvc60lvdc2dmrszpa20n2tu3vw839x97gtq6ezvx2qu9m9w95")
        Array<NonFungibleLocalId>(
            NonFungibleLocalId("#1#")
        )
    ;
    CALL_METHOD
        Address("account_sim1c956qr3kxlgypxwst89j9yf24tjc7zxd4up38x37zr6q4jxdx9rhma")
        "withdraw"
        Address("resource_sim1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxakj8n3")
        Decimal("5000")
    ;
    TAKE_FROM_WORKTOP
        Address("resource_sim1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxakj8n3")
        Decimal("5000")
        Bucket("bucket1")
    ;
    CALL_METHOD
        Address("component_sim1cr4y0gjxcsj5kukswz0w0zqq653mhr8232yahwyc4q29p27sppwk9t")
        "deposit_earnings"
        0u64
        Bucket("bucket1")
    ;
    CALL_METHOD
        Address("account_sim1c956qr3kxlgypxwst89j9yf24tjc7zxd4up38x37zr6q4jxdx9rhma")
        "try_deposit_batch_or_refund"
        Expression("ENTIRE_WORKTOP")
        Enum<0u8>()
    ;

`

export const instantiateManifest = `
    CALL_METHOD
        Address("component_sim1cptxxxxxxxxxfaucetxxxxxxxxx000527798379xxxxxxxxxhkrefh")
        "lock_fee"
        Decimal("5000")
    ;
    CALL_FUNCTION
        Address("package_sim1pkwaf2l9zkmake5h924229n44wp5pgckmpn0lvtucwers56awywems")
        "Solarix"
        "instantiate"
        Decimal("0.1")
        Decimal("0.2")
    ;
    CALL_METHOD
        Address("account_sim1c956qr3kxlgypxwst89j9yf24tjc7zxd4up38x37zr6q4jxdx9rhma")
        "try_deposit_batch_or_refund"
        Expression("ENTIRE_WORKTOP")
        Enum<0u8>()
    ;
`