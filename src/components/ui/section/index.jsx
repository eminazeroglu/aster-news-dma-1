function Section({title, children}) {
    return (
        <section>
            <div className="mb-[14px]">
                <h5 className="text-[15px] font-bold">{title}</h5>
            </div>
            <div>
                {children}
            </div>
        </section>
    );
}

export default Section;