import { useTranslation } from "react-i18next";
import { Divider } from "components";


const classes = {
    root: "CategoryPage",
    article: "CategoryPage-article",
    title: "CategoryPage-title",
}

export default function Category() {

    const { t } = useTranslation();

    return (
        <main className={classes.root}>
            <article className={classes.article}>
                <h3 className={classes.title}>{t("category")}</h3>
                <Divider />
            </article>
        </main>
    )
}