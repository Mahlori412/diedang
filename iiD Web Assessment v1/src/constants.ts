import DocumentationIcon from "./components/icons/IconDocumentation.vue"
import ToolingIcon from "./components/icons/IconTooling.vue"
import EcosystemIcon from "./components/icons/IconEcosystem.vue"
import CommunityIcon from "./components/icons/IconCommunity.vue"
import SupportIcon from "./components/icons/IconSupport.vue"
import DetailsFetch from "./components/instructions/details/DetailsFetch.vue"
import DetailsState from "./components/instructions/details/DetailsState.vue"
import DetailsComponent from "./components/instructions/details/DetailsComponent.vue"
import DetailsRoute from "./components/instructions/details/DetailsRoute.vue"
import DetailsSubmit from "./components/instructions/details/DetailsSubmit.vue"

export const quests = { 
  1: {
    link: "fetch",
    icon: DocumentationIcon,
    heading: "Quest 1: Fetch data from multiple APIs",
    summary: "Create a service to fetch data from three endpoints and return a list of 5 parsed and combined JSON objects.",
    details: DetailsFetch,
  },

  2: {
    link: "state",
    icon: ToolingIcon,
    heading: "Quest 2: Maintain API data state ",
    summary: "Using Pinia as store library, create state, getters and actions \
      in the existing store to manage and expose API data to the views.",
    details: DetailsState,
  },

  3: {
    link: "component",
    icon: EcosystemIcon,
    heading: "Quest 3: Consume state data ",
    summary: "Flesh out a Vue component to display the API data from your store.",
    details: DetailsComponent,
  },

  4: {
    link: "route",
    icon: CommunityIcon,
    heading: "Quest 4: Route and navigate",
    summary: "Create a route and navigation menu item to display your new component.",
    details: DetailsRoute,
  },

  5: {
    link: "submit",
    icon: SupportIcon,
    heading: "Submit your project",
    summary: "Add comments and clean your code.",
    details: DetailsSubmit,
  },

}