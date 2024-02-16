import { useTranslation } from "react-i18next";
import { Divider } from "components";

const classes = {
    root: "CategoryPage",
    title: "CategoryPage-title",
    article: "CategoryPage-article",
    container: "CategoryPage-container",
    sofa: "CategoryPage-sofa",
    benches: "CategoryPage-benches",
    chair: "CategoryPage-chair",
    plumage: "CategoryPage-plumage",
    dining: "CategoryPage-dining",
    accent: "CategoryPage-accent"
};

export default function Category() {

    const { t } = useTranslation();

    return (
        <main className={classes.root}>
            <article className={classes.article}>
                <h3 className={classes.title}>{t("category")}</h3>
                <Divider />
                <div className={classes.container}>
                    <div style={{ backgroundColor: "#ff0" }} className={classes.sofa}>Seater Sofa</div>
                    <div style={{ backgroundColor: "#f00" }} className={classes.benches}>Stool & Benches</div>
                    <div style={{ backgroundColor: "#000", color: "#fff" }} className={classes.chair}>Stool Chair</div>
                    <div style={{ backgroundColor: "#f0f" }} className={classes.plumage}>Plumage Hand</div>
                    <div style={{ backgroundColor: "#00f" }} className={classes.dining}>Dining Chair</div>
                    <div style={{ backgroundColor: "#0ff" }} className={classes.accent}>Accent Chair</div>
                </div>
            </article>
        </main>
    )
}