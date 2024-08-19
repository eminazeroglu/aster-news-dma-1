import Button from "../button";

function AuthorItem({item}) {
    return (
        <article className="bg-white p-[13px] rounded-[4px] text-center">
            <figure className="size-[70px] overflow-hidden mb-[7px] rounded-full inline-block">
                <img className="size-full object-cover" src="https://s3-alpha-sig.figma.com/img/ac1e/f74c/931ce67584033f45f9412bcba54ac5f3?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qPdymf7qCzCHPsdvzVXGi-tSFjkTYCI9rJFn3to-Zqs3T~4cEDSGl41YVwQJxh2fYApbvHktrb-aqu4EcZC2T-~EuFVjvAxgnq8ZvC6HX~gLgCK1hv4gpnu5YqQ0Kee33okpfVOlkMTwMdsXkLWlc-ZQdi9VwafimxLRtyu8jCBKlup5NK1hXSVM6lrhxOlmJBHciH2CfwhlUO9JRevu5uPSKsy94V6NLNWemsuvIM3zVj9VHqdbUkxKxsPmDigEShWqI3zC58vIu9A1Lpt2Tuwv~yJRlLwGm~M4YnIDm5eDOeCuc3CwIjjir17sxKtNTSR6ooKbO7xa4dDrbFHlLw__" alt="" />
            </figure>
            <div>
                <h5 className="text-[14px] font-medium">Shan Teylor</h5>
                <p className="text-[#9CABB7] text-[12px]">Tech Mint</p>
            </div>
            <div className="mt-[7px]">
                <Button block={true} rounded={true}>
                    Follow
                </Button>
            </div>
        </article>
    );
}

export default AuthorItem;