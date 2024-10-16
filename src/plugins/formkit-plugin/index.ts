import type { FormKitNode, FormKitSectionsSchema, FormKitSchemaNode } from "@formkit/core";

export default function createToolTipPlugin(_options?: Record<string, any>) {
  return function toolTipPlugin(node: FormKitNode) {
    if (node.props.definition && node.props.definition.schema) {
      const original = node.props.definition.schema as (extensions?: FormKitSectionsSchema) => FormKitSchemaNode;

      node.props.definition.schema = (extensions: FormKitSectionsSchema = {}) => {
        extensions.help = { if: "false" };
        extensions.label = {
          children: [
            "$label",
            {
              $el: "span",
              if: "$help",
              attrs: {
                class: "tooltip",
              },
              children: [
                "?",
                {
                  $el: "span",
                  attrs: {
                    class: "tooltip-inner",
                  },
                  children: "$help",
                },
              ],
            },
          ],
        };
        return original(extensions);
      };
    }
  };
}